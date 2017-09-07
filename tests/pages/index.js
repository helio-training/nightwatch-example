const indexCommands = {
  clickButton () {
    return this
      .waitForElementVisible('@specialButton')
      .click('@specialButton')
  }
}

export default {
  url: `${process.env.ENV_URL}/`,
  commands: [indexCommands],
  elements: {
    specialButton: {
      selector: 'button'
    },
    specialText: {
      selector: '.special-text'
    }
  }
}
