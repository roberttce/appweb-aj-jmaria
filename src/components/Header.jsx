import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import styled from "styled-components";
import logo from "../assets/img/logo.jpeg";

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 12px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  font-family: 'Poppins', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 8px 16px;
    justify-content: flex-start;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  img {
    width: 100px;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const MobileTitle = styled.h1`
  display: none;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
  text-align: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 24px;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }

  li {
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  li a {
    color: #333;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    position: relative;
    padding: 5px 0;
    transition: all 0.2s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;

    @media (max-width: 768px) {
      padding: 6px 0;
      font-size: 14px;
    }
  }

  li a:hover {
    color: #0056b3;
  }

  li a.active {
    color: #0056b3;
    font-weight: 600;
  }

  li a.active:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: #0056b3;
    border-radius: 2px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  min-width: 260px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  padding: 8px 0;
  margin-top: 8px;
  border: 1px solid #f0f0f0;

  ${props => props.isOpen && `
    opacity: 1;
    visibility: visible;
  `}

  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    border: none;
    margin-top: 0;
    padding: 0 0 0 12px;
    opacity: 1;
    visibility: visible;
    display: none;
    ${props => props.isOpen && `
      display: block;
    `}
  }
`;

const CategoryContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 2px;
  }
`;

const DropdownCategory = styled.div`
  padding: 10px 16px;
  color: #333;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  transition: all 0.2s ease;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  margin: 0 8px;

  @media (max-width: 768px) {
    margin: 0;
    background: transparent;
    border-bottom: none;
    padding: 4px 0;
    font-size: 13px;
  }

  &:hover {
    color: #0056b3;
    background: #f0f0f0;

    @media (max-width: 768px) {
      background: transparent;
    }
  }
`;

const SubMenu = styled.div`
  background: #fff;
  width: 100%;
  padding: 4px 0;
  display: none;
  ${props => props.isOpen && `
    display: block;
  `}

  @media (max-width: 768px) {
    background: transparent;
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 8px 24px;
  color: #555;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 8px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 3px 0;
    font-size: 12px;
  }

  &:hover {
    color: #0056b3;
    background: #f8f9fa;

    @media (max-width: 768px) {
      background: transparent;
    }
  }
`;

const ContactIcons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  
  a {
    color: #333;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 20px;
    background: #f8f9fa;
    
    @media (max-width: 768px) {
      padding: 4px;
      background: transparent;
      font-size: 12px;
    }
    
    &:hover {
      color: #0056b3;
      background: #f0f0f0;
      transform: translateY(-1px);

      @media (max-width: 768px) {
        background: transparent;
      }
    }

    svg {
      width: 16px;
      height: 16px;

      @media (max-width: 768px) {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
  margin-right: 16px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1000;
  padding: 60px 16px 16px;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;

    &:last-child {
      border-bottom: none;
    }
  }

  li a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    display: block;
    padding: 8px 0;
    cursor: pointer;

    &:hover {
      color: #0056b3;
    }
  }
`;

const MobileDropdown = styled.div`
  margin-top: 4px;
  padding-left: 12px;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const MobileCategory = styled.div`
  color: #666;
  font-size: 14px;
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const MobileItem = styled.a`
  display: block;
  padding: 6px 0;
  color: #555;
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const servicesData = [
  {
    category: "VIDRIOS Y ALUMINIOS",
    items: [
      "Ventanas personalizadas",
      "Mamparas",
      "Muro cortina",
      "Puertas de aluminio y vidrio templado"
    ]
  },
  {
    category: "MUEBLES Y ESPACIOS",
    items: [
      "Muebles de melamina a medida",
      "Closets y roperos personalizados",
      "Cocinas (reposteros y alacenas)"
    ]
  },
  {
    category: "CONSTRUCCIÓN ESPECIALIZADA",
    items: [
      "Divisiones drywall",
      "Estructuras metálicas",
      "Barandas personalizadas",
      "Puertas especiales"
    ]
  },
  {
    category: "SERVICIOS COMPLEMENTARIOS",
    items: [
      "Acabados",
      "Instalación profesional",
      "Asesoría técnica"
    ]
  }
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);

  const isActive = (path) => location.pathname === path;

  const handleServiceClick = (item, category) => {
    navigate("/servicios");
    setTimeout(() => {
      const serviceId = item.toLowerCase().replace(/\s+/g, '-');
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const categoryElement = document.getElementById(category.toLowerCase().replace(/\s+/g, '-'));
        if (categoryElement) {
          categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </MobileMenuButton>
      
      <Logo onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }}>
        <img src={logo} alt="Company Logo" />
      </Logo>

      <MobileTitle>AJ JMARIA</MobileTitle>

      <Nav>
        <ul>
          <li>
            <a className={isActive("/") ? "active" : ""} onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }}>
              Inicio
            </a>
          </li>
          <li>
            <a className={isActive("/nosotros") ? "active" : ""} onClick={() => { navigate("/nosotros"); setIsMobileMenuOpen(false); }}>
              Nosotros
            </a>
          </li>

          {/* Menú de Servicios */}
          <li
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a
              className={isActive("/servicios") ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                navigate("/servicios");
                setIsMobileMenuOpen(false);
              }}
            >
              Servicios
              <ChevronDown size={14} />
            </a>
            <DropdownMenu isOpen={openDropdown === "services"}>
              {servicesData.map((category) => (
                <CategoryContainer key={category.category}>
                  <DropdownCategory onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}>
                    {category.category}
                    <ChevronDown size={14} style={{ transform: openCategory === category.category ? 'rotate(180deg)' : 'none' }} />
                  </DropdownCategory>
                  <SubMenu isOpen={openCategory === category.category}>
                    {category.items.map((item) => (
                      <DropdownItem 
                        key={item} 
                        onClick={(e) => {
                          e.preventDefault();
                          handleServiceClick(item, category.category);
                        }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </SubMenu>
                </CategoryContainer>
              ))}
            </DropdownMenu>
          </li>

          {/* Menú de Productos */}
          <li
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a
              className={isActive("/productos") ? "active" : ""}
              onClick={() => { navigate("/productos"); setIsMobileMenuOpen(false); }}
            >
              Productos
              <ChevronDown size={14} />
            </a>
            <DropdownMenu isOpen={openDropdown === "products"}>
              {/* Categoría: Vidrios */}
              <CategoryContainer>
                <DropdownCategory>Vidrios</DropdownCategory>
                <SubMenu className="submenu">
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/vidrios-por-mayor-menor"); }}>
                    Vidrios por mayor y menor
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/vidrio-templado"); }}>
                    Vidrio templado
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/vidrio-laminado"); }}>
                    Vidrio laminado
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/vidrio-insulado"); }}>
                    Vidrio insulado
                  </DropdownItem>
                </SubMenu>
              </CategoryContainer>
              {/* Categoría: Perfiles de Aluminio */}
              <CategoryContainer>
                <DropdownCategory>Perfiles de Aluminio</DropdownCategory>
                <SubMenu className="submenu">
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/serie-noba"); }}>
                    Serie NOBA
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/serie-25"); }}>
                    Serie 25
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/serie-42"); }}>
                    Serie 42
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/serie-80"); }}>
                    Serie 80
                  </DropdownItem>
                </SubMenu>
              </CategoryContainer>
              {/* Categoría: Accesorios y Herrajes */}
              <CategoryContainer>
                <DropdownCategory>Accesorios y Herrajes</DropdownCategory>
                <SubMenu className="submenu">
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/herrajes-para-ventanas"); }}>
                    Herrajes para ventanas
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/herrajes-para-mamparas"); }}>
                    Herrajes para mamparas
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/sistemas-de-cerradura"); }}>
                    Sistemas de cerradura
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/accesorios-para-barandas"); }}>
                    Accesorios para barandas
                  </DropdownItem>
                </SubMenu>
              </CategoryContainer>
              {/* Categoría: Materiales Complementarios */}
              <CategoryContainer>
                <DropdownCategory>Materiales Complementarios</DropdownCategory>
                <SubMenu className="submenu">
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/planchas-de-melamina"); }}>
                    Planchas de melamina
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/materiales-para-drywall"); }}>
                    Materiales para drywall
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/selladores-adhesivos"); }}>
                    Selladores y adhesivos
                  </DropdownItem>
                  <DropdownItem onClick={(e) => { e.preventDefault(); navigate("/productos/perfiles-de-acero"); }}>
                    Perfiles de acero
                  </DropdownItem>
                </SubMenu>
              </CategoryContainer>
            </DropdownMenu>
          </li>
          <li>
            <a className={isActive("/proyectos") ? "active" : ""} onClick={() => { navigate("/proyectos"); setIsMobileMenuOpen(false); }}>
              Proyectos
            </a>
          </li>
          <li>
            <a className={isActive("/contacto") ? "active" : ""} onClick={() => { navigate("/contacto"); setIsMobileMenuOpen(false); }}>
              Contacto
            </a>
          </li>
        </ul>
      </Nav>

      <ContactIcons>
        <a href="https://wa.me/51972540043" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} />
        </a>
        <a href="mailto:jmariaperusac@gmail.com">
          <Mail size={20} />
        </a>
        <a href="tel:+51972540043">
          <Phone size={20} />
        </a>
      </ContactIcons>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNav>
          <ul>
            <li>
              <a onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }}>
                Inicio
              </a>
            </li>
            <li>
              <a onClick={() => { navigate("/nosotros"); setIsMobileMenuOpen(false); }}>
                Nosotros
              </a>
            </li>
            <li>
              <MobileCategory onClick={() => {
                navigate("/servicios");
                setIsMobileMenuOpen(false);
              }}>
                Servicios
                <ChevronDown size={16} />
              </MobileCategory>
            </li>
            <li>
              <a onClick={() => { navigate("/proyectos"); setIsMobileMenuOpen(false); }}>
                Proyectos
              </a>
            </li>
            <li>
              <a onClick={() => { navigate("/contacto"); setIsMobileMenuOpen(false); }}>
                Contacto
              </a>
            </li>
          </ul>
        </MobileNav>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;