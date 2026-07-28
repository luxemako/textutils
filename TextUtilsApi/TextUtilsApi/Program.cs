using Microsoft.EntityFrameworkCore;
using TextUtilsApi;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
        policy.WithOrigins("http://localhost:3001")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowReactApp");
app.MapControllers();




app.Run();