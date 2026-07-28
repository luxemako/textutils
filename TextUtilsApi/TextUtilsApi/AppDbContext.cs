using Microsoft.EntityFrameworkCore;

namespace TextUtilsApi;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<SavedText> SavedTexts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<SavedText>().ToTable("saved_texts");
    }
}