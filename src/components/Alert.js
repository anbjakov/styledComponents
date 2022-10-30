import styled from 'styled-components';
import propTypes from "prop-types"
import {ReactComponent as Icon} from "../assets/icons/cross.svg";

const getAlertStyle = (style,elementColor)=>{
    const alertType = {
        primary : {
            background: "#605DEC",
            fontColor: "#F6F6FE"
        },
        error: {
            background: "#EB5757",
            fontColor: "#FAFAFA"
        },
        warning: {
            background: "#FFD12F",
            fontColor: "#1513A0"
        }
    }
    return alertType[style]?.[elementColor] ?? alertType.primary[elementColor]
}

const Container = styled.div`
    display: flex;
    background:  ${(props) => getAlertStyle(props.color,"background")};
    color: ${(props) => getAlertStyle(props.color,"fontColor")};
    padding: 16px 32px;
    font-size: 18px;
    line-height: 24.55px;        
`
const Message = styled.div`
     display: flex;
     justify-content: center;
     width: 99%;
    `
const Dismiss = styled(Message)`
    width: 1%;
    align-self: center;
    width: 16px; 
    height: 16px;
    path {
    fill: ${(props) => getAlertStyle(props.color,"fontColor")};
      }
   
`

const Alert = ({children, color, onClose})=>{
      return (
          <Container color={color}>
              <Message>
                  {children}
              </Message>
              <Dismiss color={color} onClick={onClose}>
                 <Icon/>
              </Dismiss>
          </Container>
      )

}

export default Alert;
Alert.propTypes = {
    color: propTypes.oneOf(["primary","error","warning"]),
    onClose: propTypes.func.isRequired,
    children: propTypes.string,

};
Alert.defaultProps = {
    color: "primary",
}