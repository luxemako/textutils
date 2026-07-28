using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TextUtilsApi.Controllers;

[ApiController]
[Route("api/texts")]
public class TextsController : ControllerBase
{
    private readonly AppDbContext _context;

    public TextsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> SaveText([FromBody] SavedText textData)
    {
        _context.SavedTexts.Add(textData);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Text saved successfully!", data = textData });
    }

    [HttpGet]
    public async Task<IActionResult> GetAllTexts()
    {
        var list = await _context.SavedTexts.OrderByDescending(t => t.CreatedAt).ToListAsync();
        return Ok(list);
    }
}