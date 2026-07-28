namespace TextUtilsApi;

public class SavedText
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public int WordCount { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}