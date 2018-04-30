import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { RootState } from '../store';
import {
    Button,
    Glyphicon
} from 'react-bootstrap';
import { visibleTime } from '../modules/schedule/selectors';
import { updateVisibleTime as setVisibleTime } from '../modules/schedule/actions';
import CalendarButton from '../components/FormElements/CalendarButton/CalendarButton';
import ScheduleShiftAddModal from './ScheduleShiftAddModal';
import ScheduleShiftCopyModal from './ScheduleShiftCopyModal';

interface ScheduleControlsStateProps {
    visibleTimeStart: any;
    visibleTimeEnd: any;
}

interface ScheduleControlsProps {
}

interface ScheduleDistpatchProps {
    updateVisibleTime: (startTime: any, endTime: any) => void;
}

class ScheduleControls extends React.PureComponent<
    ScheduleControlsProps & ScheduleControlsStateProps & ScheduleDistpatchProps> {

    render() {
        const { visibleTimeStart, visibleTimeEnd, updateVisibleTime } = this.props;
        return (
            
            <div style={{ textAlign: 'center', display: 'flex'}}>
                <Button
                    onClick={() => updateVisibleTime(
                        moment(visibleTimeStart).subtract('week', 1),
                        moment(visibleTimeEnd).subtract('week', 1)
                    )}
                    bsStyle="link" 
                    bsSize="large" 
                    style={{color: 'white'}}
                >
                    <Glyphicon glyph="chevron-left" />
                </Button>
                
                <CalendarButton 
                    onChange={(selectedDate) => updateVisibleTime(
                        moment(selectedDate).startOf('week'),
                        moment(selectedDate).endOf('week')
                    )}
                    defaultValue={visibleTimeStart}
                    todayOnClick={() => updateVisibleTime(
                        moment().startOf('week'),
                        moment().endOf('week')
                    )}
                />

                <Button
                    onClick={() => updateVisibleTime(
                        moment(visibleTimeStart).add('week', 1),
                        moment(visibleTimeEnd).add('week', 1)
                    )}
                    bsStyle="link" 
                    bsSize="large" 
                    style={{color: 'white'}}
                >
                    <Glyphicon glyph="chevron-right" />
                </Button>   
                
                <ScheduleShiftAddModal />
                <ScheduleShiftCopyModal />
            </div>

        );
    }
}

const mapStateToProps = (state: RootState) => {
    return visibleTime(state);
};

const mapDispatchToProps = {
    updateVisibleTime: setVisibleTime
};

// tslint:disable-next-line:max-line-length
export default connect<ScheduleControlsStateProps, ScheduleDistpatchProps, ScheduleControlsProps>(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleControls);