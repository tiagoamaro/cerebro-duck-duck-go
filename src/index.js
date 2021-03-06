import React from 'react'
import Preview from './Preview'
import icon from './icon.png'

const order = 1

const plugin = ({ term, actions, display }) => {
  var search = (searchTerm) => {
    const q = encodeURIComponent(searchTerm)
    actions.open(`https://duckduckgo.com/?q=${q}`)
    actions.hideWindow()
  }

  display({
    icon: icon,
    order: order, // High priority
    title: `Search DuckDuckGo For ${term}`,
    onSelect: () => search(term),
    getPreview: () => <Preview query={term} key={term} search={search} />
  })
}

module.exports = {
  fn: plugin
}
