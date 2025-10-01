import styled from "styled-components";

export const SidebarStyled = styled.div`
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    margin-top: 0;
    left: 0;
    color: #f0f0f0;
    padding: 60px 20px 20px 0px;

    background-color: transparent;
`

export const SidebarLinks = styled.div`
    display: flex;
    position: sticky;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    width: 100%;
    height: 100%;
    top: 0;
    gap: 5px;
    padding: 5px 10px;
    border-right: 1px solid #3b83f629;

    /* background-color: red; */
    /* z-index: 0; */
    `

export const SidebarLink = styled.div`
    cursor: pointer;
    display: flex;
    padding: 15px 10px;
    align-items: center;
    background-color: transparent;
    width: 100%;
    font-size: 16px;
    gap: 5px;
    border-radius: 10px;
    transition: background-color 0.5s ease-in-out;
    
    
    & img {
        width: 30px;
        height: 30px;
        background: transparent;
    }

    &:hover {
        background-color: #0f2b45;
    }
`