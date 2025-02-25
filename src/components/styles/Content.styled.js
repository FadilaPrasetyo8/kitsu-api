import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  background-color: #577bc1;
  border-radius: 20px;
  padding: 20px;
  width: 300px; /* Lebar kartu */
  min-height: 450px; /* Tinggi minimum kartu */
  color: white;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    padding: 10px;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: 180px; /* Tinggi tetap untuk gambar */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  text-transform: uppercase;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #f1f1f1;
  flex-grow: 1; /* Isi ruang kosong */
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Batasi deskripsi ke 3 baris */
  -webkit-box-orient: vertical;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto; /* Mendorong tombol ke bawah */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const LinkButton = styled(Link)`
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1; /* Lebar tombol sama */

  &:hover {
    transform: scale(1.05);
  }

  ${({ variant }) =>
    variant === "details"
      ? `
      background-color: transparent;
      color: white;
      border: 1px solid white;
      &:hover {
        background-color: white;
        color: #e63946;
      }
    `
      : `
      background-color: #00b4d8;
      color: white;
      &:hover {
        background-color: #0077b6;
      }
    `}

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1; /* Lebar tombol sama */

  &:hover {
    transform: scale(1.05);
  }

  ${({ variant }) =>
    variant === "details"
      ? `
      background-color: transparent;
      color: white;
      border: 1px solid white;
      &:hover {
        background-color: white;
        color: #e63946;
      }
    `
      : `
      background-color: #00b4d8;
      color: white;
      &:hover {
        background-color: #0077b6;
      }
    `}

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8rem;
  }
`;
