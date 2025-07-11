import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

type RegisterFormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Tên là bắt buộc"),
  email: yup.string().required("Email là bắt buộc").email("Email không hợp lệ"),
  phone: yup
    .string()
    .required("Số điện thoại là bắt buộc")
    .matches(/^\d{10,11}$/, "Số điện thoại phải có 10-11 chữ số"),
  password: yup
    .string()
    .required("Mật khẩu là bắt buộc")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường và 1 số"
    ),
  confirmPassword: yup
    .string()
    .required("Xác nhận mật khẩu là bắt buộc")
    .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
});

type RegisterFormProps = {
  onToggleForm: () => void;
};

const RegisterForm = ({ onToggleForm }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
    // Xử lý logic đăng ký ở đây
    alert("Đăng ký thành công!");
    onToggleForm(); // Chuyển về form đăng nhập sau khi đăng ký
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-wrapper">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className={errors.name ? "error" : ""}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>

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
            type="text"
            placeholder="Phone"
            {...register("phone")}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && (
            <p className="error-message">{errors.phone.message}</p>
          )}
        </div>

        <div className="form-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
            className={errors.password ? "error" : ""}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Ẩn" : "Hiện"}
          </button>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="form-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            className={errors.confirmPassword ? "error" : ""}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="button-group">
          <button type="submit" className="primary-button">
            Submit
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={onToggleForm}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
