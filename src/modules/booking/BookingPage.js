import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '@material-ui/core/styles';
import BookingAPI from '../../api/BookingAPI';
import BookingItem from './components/BookingItem';
import Placeholder from './components/Placeholder';

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

class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingList: [],
      page: 0,
      rowsPerPage: 5,
      count: 0,
      isLoading: false,
    };
  }

  async componentDidMount() {
    const result = await this.getBookingList();
    console.log(result);
    this.setState({
      bookingList: result.items,
      count: result.totalRecords,
      isLoading: false
    });
  }

  getBookingList() {
    const { page, rowsPerPage } = this.state; //This data will actually come from filter Form
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
    return BookingAPI.getALLBookingsList(data);
  }

  handleChangePage = async (event, page) => {
    this.setState({
      page,
      bookingList: [],
      isLoading: true,
    });
    const result = await this.getBookingList();
    this.setState({
      bookingList: result.items,
      isLoading: false,
    });
  };

  handleChangeRowsPerPage = async (event) => {
    await this.setState({
      rowsPerPage: event.target.value
    });
    this.setState({
      bookingList: [],
      isLoading: true,
    });
    const result = await this.getBookingList();
    this.setState({
      bookingList: result.items,
      isLoading: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { bookingList, rowsPerPage, page, count } = this.state;

    return (
      <div>
        {
          this.state.isLoading ? [1,2,3].map(i=> <Placeholder key={i} />) :
            <div>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableBody>
                    {bookingList.map(booking => <BookingItem key={bookingList.bookingId} {...booking} />)}
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
            </div>

        }
      </div>
    );
  }
}

BookingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingPage);