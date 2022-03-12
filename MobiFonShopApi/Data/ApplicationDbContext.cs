using Microsoft.EntityFrameworkCore;
using MobiFonShopApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobiFonShopApi.Data
{
    public class ApplicationDbContext: DbContext
    {


        public DbSet<Proizvodjac> Proizvodjac { get; set; }
        public DbSet<Telefon> Telefon { get; set; }
        public DbSet<KorisnickiNalog> KorisnickiNalog { get; set; }

        public ApplicationDbContext(
            DbContextOptions options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);


        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //ovdje pise FluentAPI konfiguraciju

            //modelBuilder.Entity<Student>().ToTable("Student");
            //modelBuilder.Entity<Nastavnik>().ToTable("Nastavnik");
        }


    }
}
