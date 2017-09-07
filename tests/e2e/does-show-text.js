export default {
  'It should show the text when the button is clicked': (client) => {
    const indexPage = client.page.index()

    indexPage
      .navigate()
      .clickButton()

    indexPage.expect.element('@specialText').to.be.visible

    client.end()
  }
}
