import { useNavigate } from "react-router-dom";
import { checkExits, register } from "../../services/userService";
import { generateToken } from "../../helpers/generateToken";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();

    // Xử lý ngày tháng năm sinh sang dạng dd/mm//yy
    const [dateOfBirth, setDateOfBirth] = useState("");
    const handleDateChange = (e) => {
        const ngaySinh = e.target.value;
        const [year, month, day] = ngaySinh.split("-")
        setDateOfBirth(`${day}/${month}/${year}`);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const address = e.target[1].value;
        // const date = e.target[2].value;
        const phone_number = e.target[3].value;
        const password = e.target[4].value;

        const checkExitsPhoneNumber = await checkExits("phone_number", phone_number)
        console.log(checkExitsPhoneNumber);

        if (checkExitsPhoneNumber.length > 0) {
            alert("Số điện thoại đã tồn tại")
        }
        else {
            const options = {
                fullName: fullName,
                phone_number: phone_number,
                address: address,
                password: password,
                created_at: "CURRENT_TIMESTAMP",
                updated_at: "CURRENT_TIMESTAMP",
                date_of_birth: dateOfBirth,
                expired: 1,
                role: "user",
                active: 1,
                token: generateToken()
            }
            const response = await register(options)

            if (response) {
                alert("Đăng ký thành công")
                navigate("/login")
            }
            else {
                alert("Dang ky that bai")
            }

        }
    }

    return (
        <>
            {/* <form onSubmit={handleSubmit}>
           <h2>LOGIN</h2>
           <div>
                <input type="text" placeholder="Nhập họ và tên"/>
           </div>
           <div>
                <input type="text" placeholder="Thành phố đang sống"/>
           </div>
           <div>
               <input type="number" placeholder="Nhập số điện thoại " />
           </div>
           <div>
               <input type="password" placeholder="Nhập mật khẩu" />
           </div>

           <button type="submit" >Login</button>
       </form> */}
            <section id="form" onSubmit={handleSubmit}>{/*form*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="signup-form">{/*sign up form*/}
                                <h2>Đăng ký tài khoản</h2>
                                <form action="#">
                                    <input type="text" placeholder="Nhập họ và tên" required/>
                                    <input type="text" placeholder="Thành phố đang sống" required />
                                    <input type="date" onChange={handleDateChange} placeholder="Nhập ngày tháng năm sinh" required />
                                    <input type="number" placeholder="Nhập số điện thoại" required/>
                                    <input type="password" placeholder="Nhập mật khẩu" required/>
                                    <button type="submit" className="btn btn-default">Đăng ký</button>
                                </form>
                            </div>{/*/sign up form*/}
                        </div>
                    </div>
                </div>
            </section>{/*/form*/}

        </>
    )
}

export default Register;