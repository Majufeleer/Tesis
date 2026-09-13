/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.write(`
<a href="#" onclick="document.getElementById('loginModal').style.display='flex'; return false;" style="
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #1861D9;
  color: #fff;
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  margin-left: 12px;
  transition: background 0.3s ease;
" onmouseover="this.style.background='#144fb0';" onmouseout="this.style.background='#1861D9';">
  <i class="bi bi-box-arrow-in-right"></i> Iniciar sesión
</a>

<div id="loginModal" style="
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 15, 30, 0.75);
  z-index: 9999;
  align-items: center;
  justify-content: center;
">
  <div style="
    background: linear-gradient(145deg, #1e1e2f, #2a2a40);
    border-radius: 16px;
    border: 1px solid rgba(24, 97, 217, 0.3);
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    padding: 40px 35px;
    width: 90%;
    max-width: 360px;
    position: relative;
  ">
    <span onclick="document.getElementById('loginModal').style.display='none';" style="
      position: absolute;
      top: 16px;
      right: 18px;
      color: #9CA3AF;
      font-size: 22px;
      cursor: pointer;
      line-height: 1;
    ">&times;</span>
    <div style="text-align: center; margin-bottom: 28px;">
      <div style="
        width: 60px;
        height: 60px;
        margin: 0 auto 14px;
        border-radius: 50%;
        background: linear-gradient(135deg, #3B82F6, #1861D9);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <i class="bi bi-person-fill" style="font-size: 26px; color: #fff;"></i>
      </div>
      <h4 style="color: #fff; margin: 0; font-size: 18px;">Iniciar sesión</h4>
    </div>
    <form onsubmit="event.preventDefault(); 
      iniciarSesion(
        document.getElementById('loginEmail').value,
        document.getElementById('loginPassword').value
      );">
      <div style="margin-bottom: 18px;">
        <label style="display: block; color: #9CA3AF; font-size: 13px; margin-bottom: 6px;">Correo</label>
        <input type="email" id="loginEmail" required class="login-input" style="
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid rgba(24, 97, 217, 0.3);
          background: rgba(255,255,255,0.05);
          color: #fff;
          font-size: 14px;
          outline: none;
          box-sizing: border-box;
          caret-color: #1861D9;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        ">
        <span style="display: block; color: #6B7280; font-size: 12px; margin-top: 5px;">Escribe tu correo electrónico</span>
      </div>
           <div style="margin-bottom: 24px;">
        <label style="display: block; color: #9CA3AF; font-size: 13px; margin-bottom: 6px;">Contraseña</label>
        <div style="position: relative;">
          <input type="password" id="loginPassword" required class="login-input" style="
            width: 100%;
            padding: 10px 40px 10px 14px;
            border-radius: 8px;
            border: 1px solid rgba(24, 97, 217, 0.3);
            background: rgba(255,255,255,0.05);
            color: #fff;
            font-size: 14px;
            outline: none;
            box-sizing: border-box;
            caret-color: #1861D9;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          ">
          <i 
            class="bi bi-eye-slash" 
            onclick="
              const inp = document.getElementById('loginPassword');
              const mostrando = inp.type === 'text';
              inp.type = mostrando ? 'password' : 'text';
              this.className = mostrando ? 'bi bi-eye-slash' : 'bi bi-eye';
            "
            style="
              position: absolute;
              right: 14px;
              top: 50%;
              transform: translateY(-50%);
              color: #9CA3AF;
              cursor: pointer;
              font-size: 15px;
            "
          ></i>
        </div>
        <span style="display: block; color: #6B7280; font-size: 12px; margin-top: 5px;">Escribe tu contraseña</span>
      </div>
      <button type="submit" id="btnLogin" style="
        width: 100%;
        background: #1861D9;
        color: #fff;
        border: none;
        padding: 12px;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
      " onmouseover="this.style.background='#144fb0';" onmouseout="this.style.background='#1861D9';">
        Entrar
      </button>
    </form>
  </div>
</div>
`);