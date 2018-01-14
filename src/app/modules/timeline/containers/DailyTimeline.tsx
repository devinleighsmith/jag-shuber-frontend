import * as React from 'react';
import { AssignmentTimelineProps } from '../../assignments/components/AssignmentTimeline'
import { getSheriffList } from '../../sheriffs/actions';
import { visibleTime } from '../selectors';
import { allAssignments } from '../../assignments/selectors';
import { offDutySheriffs, onDutySheriffs } from '../../sheriffs/selectors';
import { getAssignments } from '../../assignments/actions';
import { updateVisibleTime } from '../actions';
import { connect } from 'react-redux';
import { RootState } from '../../../store/reducers';
import OnOffDutyTimeline from '../components/OnOffDutyTimeline';
import { Sheriff, SheriffAssignment } from '../../../api/index';
import './DailyTimeline.css'


interface DailyTimelineProps {
    getSheriffs?: () => void;
    getAssignments?: () => void;
    onVisibleTimeChange?: (start: any, end: any) => void
    onDutySheriffs: Sheriff[];
    offDutySheriffs: Sheriff[];
    assignments: SheriffAssignment[];
    sideBarWidth?:number;
}



class DailyTimeline extends React.Component<DailyTimelineProps>{

    componentWillMount() {
        const { getSheriffs, getAssignments } = this.props;
        getSheriffs && getSheriffs();
        getAssignments && getAssignments();
    }

    render() {
        const { assignments, onDutySheriffs, offDutySheriffs,sideBarWidth=200, ...rest } = this.props;
        return (
            <div>
                <OnOffDutyTimeline
                    onDuty={true}
                    sheriffs={onDutySheriffs}
                    assignments={assignments}
                    sidebarWidth={sideBarWidth}
                    {...rest} />

                    <div  style={{ padding: 5,paddingTop:10, backgroundColor:"#88222222", textAlign: 'left' }}>
                        <h3 style={{marginLeft: sideBarWidth/4 }}>Off Duty</h3>
                    </div>


                <OnOffDutyTimeline
                    showHeader={false}
                    sideBarHeaderTitle=""
                    onDuty={false}
                    sheriffs={offDutySheriffs}
                    assignments={assignments}
                    sidebarWidth={sideBarWidth}
                    {...rest} />
            </div>
        )
    }

}

const mapStateToProps = (state: RootState, props: AssignmentTimelineProps) => {
    const { visibleTimeStart, visibleTimeEnd } = visibleTime(state);

    return {
        offDutySheriffs: offDutySheriffs(state),
        onDutySheriffs: onDutySheriffs(state),
        assignments: allAssignments(state),
        visibleTimeStart,
        visibleTimeEnd
    };
}

const mapDispatcToProps: Partial<DailyTimelineProps> = {
    onVisibleTimeChange: updateVisibleTime,
    getAssignments: getAssignments,
    getSheriffs: getSheriffList
}

export default connect<DailyTimelineProps>(mapStateToProps, mapDispatcToProps)(DailyTimeline);

