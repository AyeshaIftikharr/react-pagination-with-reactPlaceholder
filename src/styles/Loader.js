import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  margin-bottom: 15px;
  min-height: ${props => (props.minHeight ? props.minHeight : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : 'auto')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '0px')};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : '0px')};
`;

export const Animate = styled.div`
  height: ${props => (props.height ? props.height : '25px')};
  width: ${props => (props.width ? props.width : '100%')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)};
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0px')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '0px')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};

  /** Animations Start Here */
  position: relative;
  animation: placeHolderShimmer 2s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
  /** Animations End Here */
`;
