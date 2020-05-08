using Microsoft.EntityFrameworkCore;

namespace Library.Models
{
    public class MyDbContext : DbContext
    {
        public DbSet<Coffee> Coffees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseMySql(@"Server=localhost;database=coffees;uid=root;pwd=root;port=8889;");
        }
    }
}