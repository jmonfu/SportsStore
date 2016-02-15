using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SportStoreWebAPI.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public int Stock { get; set; }

        public string ImageName { get; set; }

        //Section Navigation
        public int SectionId { get; set; }
        public Section Section { get; set; }

        //SubCategory
        public int SubCategoryId { get; set; }
        public SubCategory SubCategory { get; set; }

    }
}