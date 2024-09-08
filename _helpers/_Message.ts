export default class _Message {
  public static lang = "pt"
  public static print(text : string) : string{
    if (this.lang == "en"){
      return "English"
    }
    return text
  }

}