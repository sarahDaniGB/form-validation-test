const Form = (props) => {

  const {
    values: { email, password, confirmPassword },
    errors,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        {errors && Boolean(errors.email) && (
          <>
            <div className="text-danger">{errors.email}</div>
          </>
        )}
      </div>
      <div className="form-group text-left">
        <label htmlFor="exampleInputPassword1">Senha</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Senha"
          value={password}
          onChange={handleChange}
        />
        {errors && Boolean(errors.password) && (
          <>
            <div className="text-danger">{errors.password}</div>
          </>
        )}
      </div>
      <div className="form-group text-left">
        <label htmlFor="exampleInputPassword1">Confirmar Senha</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={handleChange}
        />
        {errors && Boolean(errors.confirmPassword) && (
          <>
            <div className="text-danger">{errors.confirmPassword}</div>
          </>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
