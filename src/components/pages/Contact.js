const styles = {
list: {
  listStyle: 'none'
}
}

function Contact() {
  return (
    <div>
      <ul className="contact-info" style={styles.list}>
        <li >Phone: 408-425-2694</li>
        <li>
          <a href="#email">Email: niravvenkatesan@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
