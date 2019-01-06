import React from 'react'
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css'

const BookingItem = (booking) => {
  return (
    <div className="container" key={booking.bookingId}>
      <Card className="row">
        <div className="col-md-3">
          <Typography variant="headline" color="textSecondary">
            Booking ID
                  </Typography>
          <Typography variant="subheading" >
            {booking.bookingId}
          </Typography>
          <Typography variant="headline" color="textSecondary">
            Estimated Pickup Time
                  </Typography>
          <Typography variant="subheading" >
            {booking.estimatedPickupTime}
          </Typography>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <Typography variant="subheading" color="textSecondary">
                Line Name
                    </Typography>
              <Typography variant="body1" >
                {booking.line.title}
              </Typography>
              <Typography variant="subheading" color="textSecondary">
                Line Type
                    </Typography>
              <Typography variant="body1" >
                {booking.line.intercity}
              </Typography>
            </div>
            <div className="col">
              <Typography variant="subheading" color="textSecondary">
                Pickup Stop
                    </Typography>
              <Typography variant="body1" >
                {booking.line.pickUpStopName}
              </Typography>
              <Typography variant="subheading" color="textSecondary">
                Drop off Stop
                    </Typography>
              <Typography variant="body1" >
                {booking.line.dropOffStopName}
              </Typography>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Typography variant="headline" color="textSecondary">
            Estimated Price
          </Typography>
          <Typography variant="subheading" >
            {booking.fare}
          </Typography>
        </div>
      </Card>
      <Divider />
    </div>

  );
}

BookingItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default BookingItem;