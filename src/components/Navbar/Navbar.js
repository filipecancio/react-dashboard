import React, {Component} from "react";
class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">DevMedia</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Resumo</a>
                    </li>
                    <li className="nav-item">
                        <a href="/consultas" className="nav-link">Consultas</a>
                    </li>
                    <li className="nav-item">
                        <a href="/faturamento" className="nav-link">Faturamento</a>
                    </li>
                  </ul>
                </div>
            </nav>
    )
  }
}
export default Navbar;
