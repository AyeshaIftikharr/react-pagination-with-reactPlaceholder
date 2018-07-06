import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';

const url = `http://qa-cmt-journey-service.us-east-1.elasticbeanstalk.com/v1/colleague/booking/list`;

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class BookingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingList: [],
      page: 0,
      rowsPerPage: 5,
      count: 0,
    };
  }

  componentDidMount() {
    this.getBookingList();
  }

  getBookingList() {
    this.setState({ bookingList: [] });
    const { page, rowsPerPage } = this.state;
    const data = {
      bookingId: '',
      bookingStatusId: '',
      cityId: '',
      descending: true,
      limitCount: rowsPerPage,
      lineType: '',
      pageNo: page,
      sortingProperties: []
    }
    const parameters = {
      method: 'POST',
      headers: {
        'content-type': 'application/json ; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }
    return fetch(url, parameters)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
            bookingList: response.items,
            count: response.totalRecords
          });
      })
      .catch(error => console.log(error))
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
    this.getBookingList();
  };

  handleChangeRowsPerPage = async (event) => {
    await this.setState({ rowsPerPage: event.target.value });
    this.getBookingList();
  };

  render() {
    const { classes } = this.props;
    const { bookingList, rowsPerPage, page, count } = this.state;
    
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            {bookingList
              .map(booking => {
                return (
                  <div key={booking.bookingId}>
                    <Card >
                      <div className="col-lg-3">
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
                      <div className="col-lg-6">
                        <div className="col-lg-6">
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
                        <div className="col-lg-6">
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
                      <div className="col-lg-3">
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
              })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={[5, 10, 25, 30, 45, 40, 45]}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

BookingTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingTable);