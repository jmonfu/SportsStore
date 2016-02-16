using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SportsStoreService.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public double Price { get; set; }

        [Required]
        public int Stock { get; set; }

        public string ImageName { get; set; }

        //Category Navigation
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }

        public int SectionId { get; set; }
        public virtual Section Section { get; set; }
    }
}