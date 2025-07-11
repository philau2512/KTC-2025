import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type LoginFormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required("Email là bắt buộc").email("Email không hợp lệ"),
  password: yup
    .string()
    .required("Mật khẩu là bắt buộc")
    .min(6, "Mật khẩu quá ngắn"),
});

type LoginFormProps = {
  onToggleForm: () => void;
};

const LoginForm = ({ onToggleForm }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Xử lý logic đăng nhập ở đây
    alert("Đăng nhập thành công!");
  };

  return (
    <div className="form-wrapper">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="button-group">
          <button type="submit" className="primary-button">
            Login
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={onToggleForm}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
