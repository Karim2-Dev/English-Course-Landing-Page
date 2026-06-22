export default function Footer() {
  return (
    <div className="bg-primary py-10 px-3 border-t-2 border-t-neutral/50">
      <div className="container gap-6 flex flex-col md:flex-row items-center justify-center">
        <h3 className="!text-white text-xl">English Start</h3>
        <ul className="links grid grid-cols-2 md:grid-cols-4 gap-2 text-babyblue">
          <li>
            <a href="#">Privcy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Contact Support</a>
          </li>
          <li>
            <a href="#">WhatsApp Support</a>
          </li>
        </ul>
        <p className="!text-babyblue text-sm">
          © 2024 English Start. Empowering global careers.
        </p>
      </div>
    </div>
  );
}
