const Footer = ({ links, copyRight }) => {
  const linkList = links.map((link) => {
    return (
      <li key={link.key}>
        <a href={link.path}>{link.caption}</a>
      </li>
    )
  })
  return (
    <footer>
      <nav>
        <ul>
          {linkList}
        </ul>
      </nav>
      {copyRight ? "copyRight by " + copyRight : null} 
    </footer>
  )
}

export default Footer