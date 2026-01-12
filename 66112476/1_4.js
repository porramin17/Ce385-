let username = "admin"; //ชื่อ
let password = 1234; //รหัส
let age = 19; // อายุ

if ( username === "admin" && password === 1234 && age >= 18) { // ถ้าชื่อ รหัส อายุถูกต้อง  
    console.log("เข้าสู่ระบบสำเร็จ");
} else if (username != "admin" || password != 1234) { // ชื่อหรือรหัสผิด
    console.log("ชื่อหรือรหัสไม่ถูกต้อง");
} else if ( age < 18){                                // อายุไม่ถึง
    console.log("อายุไม่ถึง");
}