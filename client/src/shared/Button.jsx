function Button({ children, version = 'primary', type = 'button' }) {
  return (
    <button type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}
export default Button;
