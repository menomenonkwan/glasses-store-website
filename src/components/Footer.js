const date = new Date();

export default function Footer() {

  return (
    <div className="container-fluid bg-body">
      <p className="text-center fw-light py-3">&copy; {date.getFullYear()} Brannon Lee</p>
    </div>
  );
}
