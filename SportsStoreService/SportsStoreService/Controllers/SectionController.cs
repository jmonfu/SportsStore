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
using System.Web.Http.Description;
using SportsStoreService.Models;

namespace SportsStoreService.Controllers
{
    public class SectionController : ApiController
    {
        private Models.SportsStoreServiceContext db = new Models.SportsStoreServiceContext();

        // GET: api/Section
        public IQueryable<Section> GetSection()
        {
            return db.Section;
        }

        // GET: api/Section/5
        [ResponseType(typeof(Section))]
        public async Task<IHttpActionResult> GetSection(int id)
        {
            Section section = await db.Section.FindAsync(id);
            if (section == null)
            {
                return NotFound();
            }

            return Ok(section);
        }

        // PUT: api/Section/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSection(int id, Section section)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != section.Id)
            {
                return BadRequest();
            }

            db.Entry(section).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SectionExists(id))
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

        // POST: api/Section
        [ResponseType(typeof(Section))]
        public async Task<IHttpActionResult> PostSection(Section section)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Section.Add(section);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = section.Id }, section);
        }

        // DELETE: api/Section/5
        [ResponseType(typeof(Section))]
        public async Task<IHttpActionResult> DeleteSection(int id)
        {
            Section section = await db.Section.FindAsync(id);
            if (section == null)
            {
                return NotFound();
            }

            db.Section.Remove(section);
            await db.SaveChangesAsync();

            return Ok(section);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SectionExists(int id)
        {
            return db.Section.Count(e => e.Id == id) > 0;
        }
    }
}