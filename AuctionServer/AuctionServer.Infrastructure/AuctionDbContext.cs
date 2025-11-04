using AuctionServer.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Infrastructure;

public class AuctionDbContext : DbContext
{
    public AuctionDbContext(DbContextOptions options) : base(options)
    {
    }
    
    public DbSet<User> Users { get; set; }
    public DbSet<AuctionListing> AuctionListings { get; set; }
    public DbSet<AuctionItem> AuctionItems { get; set; }
    public DbSet<Bid> Bids { get; set; }
    public DbSet<Payment> Payments { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<AuctionItem>()
            .HasOne(a => a.Payment)
            .WithOne(p => p.AuctionItem)
            .HasForeignKey<Payment>(p => p.AuctionItemId)
            .IsRequired(false);
        
        modelBuilder.Entity<Bid>()
            .HasOne(b => b.Bidder)
            .WithMany(b => b.Bids)
            .HasForeignKey(b => b.BidderId)
            .OnDelete(DeleteBehavior.Restrict);
        
        modelBuilder.Entity<Bid>()
            .HasOne(b => b.AuctionItem)
            .WithMany(b => b.Bids)
            .HasForeignKey(b => b.AuctionItemId)
            .OnDelete(DeleteBehavior.SetNull);
        
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AuctionDbContext).Assembly);
    }
}