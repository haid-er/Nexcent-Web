export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <>
      <div className="h-10 flex items-center justify-center text-secondary font-bold">
        <p>Copyright &copy; {date}, Malik Haider Ali</p>
      </div>
    </>
  );
}
