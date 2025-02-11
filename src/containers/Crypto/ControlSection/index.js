import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Countdown from 'react-countdown-now';
import Box from 'common/components/Box';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { ControlWrapper } from './controlSection.style';
import ControlImage from 'common/assets/image/crypto/control.svg';
import { Fade } from 'react-awesome-reveal';

const Completionist = () => (
  <span className="readMore">You are good to go!</span>
);

// const renderer = ({ days, hours, minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a complete state
//     return <Completionist />;
//   } else {
//     // Render a countdown
//     return (
//       <div className="countPortion">
//         <div className="countSingle">
//           {days} <span className="countText">Days</span>
//         </div>
//         <div className="countSingle">
//           {hours} <span className="countText">Hours</span>
//         </div>
//         <div className="countSingle">
//           {minutes} <span className="countText">Minutes</span>
//         </div>
//         <div className="countSingle">
//           {seconds} <span className="countText">Seconds</span>
//         </div>
//       </div>
//     );
//   }
// };
const ControlSection = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  readMoreTitle,
}) => {
  return (
    <ControlWrapper id="control">
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
            <Image
              src={ControlImage?.src}
              className="controlImage"
              alt="Control Section Image"
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <Box className="readMoreSection">
              <Text {...readMoreTitle} />
            </Box>
          </Box>
        </Box>
      </Container>
    </ControlWrapper>
  );
};

// Transactions style props
ControlSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  readMoreTitle: PropTypes.object,
  btnStyle: PropTypes.object,
};

// Transactions default style
ControlSection.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Transactions section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },

  // Transactions section title default style
  title: {
    content: 'Take control of your data.',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left'],
  },
  // Transactions section description default style
  description: {
    content:
      'Allows users to create and manage their digital identities across multiple platforms and blockchain networks while retaining control over their personal data using ZKP, TLS Notary, WorldCoin and other privacy-preserving technologies.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
  },
  sectionSubTitle: {
    content: 'Effortless identity for everyone.',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
    textAlign: ['left', 'left'],
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default ControlSection;
