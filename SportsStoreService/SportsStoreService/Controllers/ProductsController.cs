using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using SportsStoreService.Common;
using SportsStoreService.Models;

namespace SportsStoreService.Controllers
{
    public class ProductsController : ApiController
    {
        private Models.SportsStoreServiceContext db = new Models.SportsStoreServiceContext();

        //Enable CORS
        //http://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api#enable-cors

        //[EnableCors(origins: "http://localhost/MonfuSportsStore", headers: "*", methods: "*")]

        [CorsPolicyProvider]
        // GET: api/Products
        public IQueryable<ProductDTO> GetProducts()
        {
            var Products = from p in db.Product
                select new ProductDTO()
                {
                    Id = p.Id,
                    CategoryId = p.CategoryId,
                    Name = p.Name,
                    Description = p.Description,
                    ImageName = p.ImageName,
                    Price = p.Price,
                    SectionId = p.SectionId,
                    Stock = p.Stock
                };

            return Products;
        }

        // GET: api/Products/5
        [ResponseType(typeof(Product))]
        public async Task<IHttpActionResult> GetProduct(int id)
        {
            var product = await db.Product.Include(p => p.Category).Include(p => p.Section).Select(p =>
                    new ProductDTO()
                    {
                        Id = p.Id,
                        CategoryId = p.CategoryId,
                        CategoryName = p.Category.Name,
                        Name = p.Name,
                        Description = p.Description,
                        ImageName = p.ImageName,
                        Price = p.Price,
                        SectionId = p.SectionId,
                        SectionName = p.Section.Name,
                        Stock = p.Stock
                    }).SingleOrDefaultAsync(b => b.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.Id)
            {
                return BadRequest();
            }

            db.Entry(product).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Products
        [ResponseType(typeof(Product))]
        public async Task<IHttpActionResult> PostProduct(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Product.Add(product);
            await db.SaveChangesAsync();

            //load all the details of this product
            db.Entry(product).Reference(x => x.Category).Load();
            db.Entry(product).Reference(x => x.Section).Load();

            var dto = new ProductDTO()
            {
                Id = product.Id,
                CategoryId = product.CategoryId,
                CategoryName = product.Category.Name,
                Name = product.Name,
                Description = product.Description,
                ImageName = product.ImageName,
                Price = product.Price,
                SectionId = product.SectionId,
                SectionName = product.Section.Name,
                Stock = product.Stock
            };

            return CreatedAtRoute("DefaultApi", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [ResponseType(typeof(Product))]
        public async Task<IHttpActionResult> DeleteProduct(int id)
        {
            Product product = await db.Product.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Product.Remove(product);
            await db.SaveChangesAsync();

            return Ok(product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductExists(int id)
        {
            return db.Product.Count(e => e.Id == id) > 0;
        }
    }
}