using SportsStoreService.Models;

namespace SportsStoreService.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<SportsStoreService.Models.SportsStoreServiceContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(SportsStoreService.Models.SportsStoreServiceContext context)
        {
            context.Section.AddOrUpdate(x => x.Id, 
                new Section() {Id=1, Name = "Men"},
                new Section() {Id=2, Name = "Women"},
                new Section() { Id = 3, Name = "Kids" }
                );

            context.Category.AddOrUpdate(x=> x.Id, 
                new Category() {Id = 1, Name="Footwear"},
                new Category() {Id = 2, Name="Clothing"},
                new Category() { Id = 3, Name = "Accessories" }
                );

            context.Product.AddOrUpdate(x => x.Id,
                new Product()
                {
                    Id = 1,
                    Name = "Nike Air Max 2015",
                    Description = "Orange and Yellow Nike Boots",
                    CategoryId = 1,
                    SectionId = 1,
                    ImageName = "nikeAirMax2015.jpg",
                    Price = 275.0,
                    Stock = 10
                },
                new Product()
                {
                    Id = 2,
                    Name = "Nike Air Max Emergent",
                    Description = "These Nike Air Max Emergent Basketball Shoes offer performance and style whilst on the courts with their mix of synthetic and genuine leather upper that provides durability and support, with Breathe Tech technology that allows for ventilation and breathability.",
                    CategoryId = 1,
                    SectionId = 1,
                    ImageName = "NikeAirMaxEmergent.jpg",
                    Price = 80.0,
                    Stock = 10
                },
                new Product()
                {
                    Id = 3,
                    Name = "Adidas Hoodie",
                    Description = "Get a comfortable and casual look with the adidas Three Stripe Logo Hoodie. The jacket features adidas branding and the distinctive three stripe detailing.",
                    CategoryId = 1,
                    SectionId = 2,
                    ImageName = "adidasHoodie.jpg",
                    Price = 35.0,
                    Stock = 10
                },
                new Product()
                {
                    Id = 4,
                    Name = "Adidas Clima 35",
                    Description = "The adidas Clima 3S Tee has adidas' climalite technology, specially designe dto help wick away moisture from the skin and keep you dry and comfortable during exercise. The tee is short sleeve with a round neck and utilises the classic adidas branding and three stripe design.",
                    CategoryId = 2,
                    SectionId = 2,
                    ImageName = "adidasLadiesSports.jpg",
                    Price = 55.0,
                    Stock = 10
                }
            );

        }
    }
}
