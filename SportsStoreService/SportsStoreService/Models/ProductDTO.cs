using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SportsStoreService.Models
{
    public class ProductDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int Stock { get; set; }
        public string ImageName { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int SectionId { get; set; }
        public string SectionName { get; set; }

    }
}