export type MCTheme = {
  currThemeDark: boolean;
};

export class MTheme {
  public theme: MCTheme = {
    currThemeDark: false,
  };

  prevTheme(theme: boolean) {
    this.theme.currThemeDark = theme;
  }

  updateTheme() {
    this.theme.currThemeDark = !this.theme.currThemeDark;
  }
}
