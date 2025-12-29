import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationChangeConsequence: {
    id: 'authoring.discussions.configurationChangeConsequences',
    defaultMessage:
      'Học viên sẽ mất quyền truy cập vào bất kỳ bài đăng thảo luận nào'
      + ' trước đây hoặc hiện tại trong khóa học của bạn.',
    description:
      'Describes that, as a consequence of changing configuration,'
      + ' students will lose access posts on the course.',
  },
  configureApp: {
    id: 'authoring.discussions.configure.app',
    defaultMessage: 'Cấu hình {name}',
  },
  configure: {
    id: 'authoring.discussions.configure',
    defaultMessage: 'Cấu hình thảo luận',
  },
  ok: {
    id: 'authoring.discussions.ok',
    defaultMessage: 'Đồng ý',
    description: 'Button allowing the user to acknowledge the provider change.',
  },
  cancel: {
    id: 'authoring.discussions.cancel',
    defaultMessage: 'Hủy',
    description: 'Button allowing the user to return to discussion provider configurations.',
  },
  confirm: {
    id: 'authoring.discussions.confirm',
    defaultMessage: 'Xác nhận',
    description: 'Button allowing the user to confirm Confirmation.',
  },
  confirmConfigurationChange: {
    id: 'authoring.discussions.confirmConfigurationChange',
    defaultMessage: 'Bạn có chắc chắn muốn thay đổi cài đặt thảo luận không?',
    description: 'Asks the user whether he/she really wants to change settings.',
  },
  confirmEnableDiscussionsLabel: {
    id: 'authoring.discussions.confirmEnableDiscussionsLabel',
    defaultMessage: 'Bật thảo luận cho các đơn vị bài học (unit) trong các phần phụ (subsection) có tính điểm?',
    description: 'Asks the user whether he/she really wants to enable discussions on units in graded subsections.',
  },
  cancelEnableDiscussionsLabel: {
    id: 'authoring.discussions.cancelEnableDiscussionsLabel',
    defaultMessage: 'Tắt thảo luận cho các đơn vị bài học (unit) trong các phần phụ (subsection) có tính điểm?',
    description: 'Asks the user whether he/she really wants to disable discussions on units in graded subsections.',
  },
  confirmEnableDiscussions: {
    id: 'authoring.discussions.confirmEnableDiscussions',
    defaultMessage: 'Việc bật tùy chọn này sẽ tự động kích hoạt thảo luận trên tất cả các đơn vị bài học trong các phần phụ có tính điểm (trừ các kỳ thi giới hạn thời gian).',
    description: 'Asks the user whether he/she really wants to enable discussions on units in graded subsections.',
  },
  cancelEnableDiscussions: {
    id: 'authoring.discussions.cancelEnableDiscussions',
    defaultMessage: 'Việc tắt tùy chọn này sẽ tự động vô hiệu hóa thảo luận trên tất cả các đơn vị bài học trong các phần phụ có tính điểm. Các chủ đề thảo luận có ít nhất 1 luồng trao đổi sẽ được liệt kê và có thể truy cập tại mục “Đã lưu trữ” trong tab Chủ đề trên trang Thảo luận.',
    description: 'Asks the user whether he/she really wants to disable discussions on units in graded subsections.',
  },
  backButton: {
    id: 'authoring.discussions.backButton',
    defaultMessage: 'Quay lại',
    description: 'Button allowing the user to return to discussion app selection.',
  },
  saveButton: {
    id: 'authoring.discussions.saveButton',
    defaultMessage: 'Lưu',
    description: 'Button allowing the user to submit their discussion configuration.',
  },
  savingButton: {
    id: 'authoring.discussions.savingButton',
    defaultMessage: 'Đang lưu',
    description: 'Button label when the discussion configuration is being submitted.',
  },
  savedButton: {
    id: 'authoring.discussions.savedButton',
    defaultMessage: 'Đã lưu',
    description: 'Button label when the discussion configuration has been successfully submitted.',
  },

  // App names (Giữ nguyên tên riêng hoặc dịch theo hệ thống)
  'appName-piazza': {
    id: 'authoring.discussions.appConfigForm.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'The name of the Piazza app.',
  },
  'appName-yellowdig': {
    id: 'authoring.discussions.appConfigForm.appName-yellowdig',
    defaultMessage: 'Yellowdig',
    description: 'The name of the yellowdig app.',
  },
  'appName-inscribe': {
    id: 'authoring.discussions.appConfigForm.appName-inscribe',
    defaultMessage: 'InScribe',
    description: 'The name of the inscribe app.',
  },
  'appName-discourse': {
    id: 'authoring.discussions.appConfigForm.appName-discourse',
    defaultMessage: 'Discourse',
    description: 'The name of the discourse app.',
  },
  'appName-ed-discuss': {
    id: 'authoring.discussions.appConfigForm.appName-ed-discuss',
    defaultMessage: 'Ed Discussion',
    description: 'The name of the Ed Discussion app.',
  },
  'appName-legacy': {
    id: 'authoring.discussions.appConfigForm.appName-legacy',
    defaultMessage: 'Open edX (cũ)',
    description: 'The name of the Legacy Open edX Discussions app.',
  },
  'appName-openedx': {
    id: 'authoring.discussions.appConfigForm.appName-openedx',
    defaultMessage: 'Open edX',
    description: 'The name of the new Open edX Discussions app.',
  },
  divisionByGroup: {
    id: 'authoring.discussions.builtIn.divisionByGroup',
    defaultMessage: 'Nhóm học tập (Cohorts)',
  },
  divideByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideByCohorts.label',
    defaultMessage: 'Chia thảo luận theo nhóm học tập',
    description: 'Label for a switch that enables dividing discussions by cohorts.',
  },
  divideByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideByCohorts.help',
    defaultMessage: 'Người học sẽ chỉ có thể xem và phản hồi các thảo luận được đăng bởi các thành viên trong cùng nhóm học tập của họ.',
    description: 'Help text for a switch that enables dividing discussions by cohorts.',
  },
  divideCourseTopicsByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.label',
    defaultMessage: 'Chia các chủ đề thảo luận chung toàn khóa học',
    description: 'Label for a switch that enables dividing course wide topics by cohorts.',
  },
  divideCourseTopicsByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.help',
    defaultMessage: 'Chọn chủ đề thảo luận chung nào mà bạn muốn phân chia theo nhóm học tập.',
    description: 'Help text asking the user to pick course-wide topics that should be divided by cohort.',
  },
  divideGeneralTopic: {
    id: 'authoring.discussions.builtIn.divideGeneralTopic.label',
    defaultMessage: 'Chung',
    description: 'Label for a checkbox allowing a user to divide the General course wide topic by cohorts.',
  },
  divideQuestionsForTAsTopic: {
    id: 'authoring.discussions.builtIn.divideQuestionsForTAsTopic.label',
    defaultMessage: 'Câu hỏi cho Trợ giảng (TA)',
    description: 'Label for a checkbox allowing a user to divide the Questions for the TAs.',
  },
  cohortsEnabled: {
    id: 'authoring.discussions.builtIn.cohortsEnabled.label',
    defaultMessage: 'Để điều chỉnh các cài đặt này, hãy bật tính năng nhóm học tập trên ',
    description: 'Label text informing the user to enable cohort',
  },
  instructorDashboard: {
    id: 'authoring.discussions.builtIn.instructorDashboard.label',
    defaultMessage: 'bảng điều khiển dành cho giảng viên',
    description: 'Label text for instructor dashboard',
  },
  // In-context discussion fields
  visibilityInContext: {
    id: 'authoring.discussions.builtIn.visibilityInContext',
    defaultMessage: 'Hiển thị thảo luận theo ngữ cảnh (in-context)',
  },
  gradedUnitPagesLabel: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.label',
    defaultMessage: 'Bật thảo luận trên các đơn vị bài học có tính điểm',
  },
  gradedUnitPagesHelp: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.help',
    defaultMessage: 'Cho phép người học tham gia thảo luận trên tất cả các trang đơn vị bài học có tính điểm, ngoại trừ các kỳ thi giới hạn thời gian.',
  },
  groupInContextSubsectionLabel: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.label',
    defaultMessage: 'Gom nhóm thảo luận ngữ cảnh ở cấp độ phần phụ (subsection)',
  },
  groupInContextSubsectionHelp: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.help',
    defaultMessage: 'Người học sẽ có thể xem bất kỳ bài đăng nào trong cùng phần phụ bất kể họ đang xem trang đơn vị bài học nào. Mặc dù điều này không được khuyến khích, nhưng nếu khóa học của bạn có trình tự học ngắn hoặc số lượng đăng ký thấp, việc gom nhóm có thể tăng mức độ tương tác.',
  },

  // Anonymous posting fields
  anonymousPosting: {
    id: 'authoring.discussions.builtIn.anonymousPosting',
    defaultMessage: 'Đăng bài ẩn danh',
  },
  allowAnonymousPostsLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymous.label',
    defaultMessage: 'Cho phép đăng thảo luận ẩn danh',
  },
  allowAnonymousPostsHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymous.help',
    defaultMessage: 'Nếu được bật, người học có thể tạo các bài đăng ẩn danh đối với tất cả người dùng khác.',
  },
  allowAnonymousPostsPeersLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.label',
    defaultMessage: 'Cho phép đăng thảo luận ẩn danh với bạn học',
  },
  allowAnonymousPostsPeersHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.help',
    defaultMessage: 'Người học có thể đăng bài ẩn danh với các bạn học khác, nhưng danh tính vẫn sẽ hiển thị đối với đội ngũ quản trị khóa học.',
  },

  // Reported Email Notifications
  reportedContentEmailNotifications: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications',
    defaultMessage: 'Thông báo',
  },
  reportedContentEmailNotificationsLabel: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.label',
    defaultMessage: 'Thông báo qua email về nội dung bị báo cáo',
  },
  reportedContentEmailNotificationsHelp: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.help',
    defaultMessage: 'Quản trị viên thảo luận, Người điều phối, Trợ giảng cộng đồng và Trợ giảng nhóm (chỉ đối với nhóm học tập của họ) sẽ nhận được thông báo qua email khi có nội dung bị báo cáo.',
  },

  // Discussion Topics
  discussionTopics: {
    id: 'authoring.discussions.discussionTopics',
    defaultMessage: 'Chủ đề thảo luận',
  },
  discussionTopicsLabel: {
    id: 'authoring.discussions.discussionTopics.label',
    defaultMessage: 'Chủ đề thảo luận chung',
    description: 'Label for a discussion topic section allowing a user to add new topic.',
  },
  discussionTopicsHelp: {
    id: 'authoring.discussions.discussionTopics.help',
    defaultMessage: 'Thảo luận có thể bao gồm các chủ đề chung không nằm trong cấu trúc khóa học. Tất cả các khóa học đều có một chủ đề chung theo mặc định.',
    description: 'Help text for adding new discussion topics that in general discussion topic section.',
  },
  discussionTopicRequired: {
    id: 'authoring.discussions.discussionTopic.required',
    defaultMessage: 'Tên chủ đề là trường bắt buộc',
    description: 'Tells the user that the discussion topic field is required and must have a value.',
  },
  discussionTopicNameAlreadyExist: {
    id: 'authoring.discussions.discussionTopic.alreadyExistError',
    defaultMessage: 'Có vẻ như tên này đã được sử dụng',
    description: 'Tells the user that the discussion topic name already in use and must have a unique name.',
  },
  addTopicButton: {
    id: 'authoring.discussions.addTopicButton',
    defaultMessage: 'Thêm chủ đề',
    description: 'Button label when Add a new discussion topic.',
  },
  deleteButton: {
    id: 'authoring.discussions.deleteButton',
    defaultMessage: 'Xóa',
    description: 'Button label when delete discussion topic from conformation card.',
  },
  cancelButton: {
    id: 'authoring.discussions.cancelButton',
    defaultMessage: 'Hủy',
    description: 'Button label when cancel discussion topic deletion conformation.',
  },
  discussionTopicDeletionHelp: {
    id: 'authoring.discussions.discussionTopicDeletion.help',
    defaultMessage: 'edX khuyến cáo bạn không nên xóa các chủ đề thảo luận khi khóa học đang vận hành.',
    description: 'Help text for delete a discussion topic from discussion topic section.',
  },
  discussionTopicDeletionLabel: {
    id: 'authoring.discussions.discussionTopicDeletion.label',
    defaultMessage: 'Xóa chủ đề này?',
    description: 'Label for discussion topic delete popup allowing a user to delete a topic.',
  },
  renameGeneralTopic: {
    id: 'authoring.discussions.builtIn.renameGeneralTopic.label',
    defaultMessage: 'Đổi tên chủ đề chung',
    description: 'Label for default topic allowing user to rename default general topic',
  },
  generalTopicHelp: {
    id: 'authoring.discussions.generalTopicHelp.help',
    defaultMessage: 'Đây là chủ đề thảo luận mặc định cho khóa học của bạn.',
    description: 'Help text for general discussion topic collapsible card.',
  },
  configureAdditionalTopic: {
    id: 'authoring.discussions.builtIn.configureAdditionalTopic.label',
    defaultMessage: 'Cấu hình chủ đề',
    description: 'Label for Additional topic allowing user to configure additional topic name',
  },
  addTopicHelpText: {
    id: 'authoring.discussions.addTopicHelpText',
    defaultMessage: 'Chọn một tên duy nhất cho chủ đề của bạn',
    description: 'Help text for input field in adding a discussion topic',
  },
  // Restricted dates
  restrictedStartDateHelp: {
    id: 'authoring.discussions.restrictedStartDate.help',
    defaultMessage: 'Nhập ngày bắt đầu, ví dụ: 10/12/2023',
  },
  restrictedEndDateHelp: {
    id: 'authoring.discussions.restrictedEndDate.help',
    defaultMessage: 'Nhập ngày kết thúc, ví dụ: 17/12/2023',
  },
  restrictedStartTimeHelp: {
    id: 'authoring.discussions.restrictedStartTime.help',
    defaultMessage: 'Nhập giờ bắt đầu, ví dụ: 09:00 SA',
  },
  restrictedEndTimeHelp: {
    id: 'authoring.discussions.restrictedEndTime.help',
    defaultMessage: 'Nhập giờ kết thúc, ví dụ: 05:00 CH',
  },
  restrictedDatesStatus: {
    id: 'authoring.restrictedDates.status',
    defaultMessage: '{status}',
  },
  restrictedStartDateRequired: {
    id: 'authoring.restrictedDates.startDate.required',
    defaultMessage: 'Ngày bắt đầu là trường bắt buộc',
    description: 'Tells the user that the restricted dates must have start date and it is required.',
  },
  restrictedEndDateRequired: {
    id: 'authoring.restrictedDates.endDate.required',
    defaultMessage: 'Ngày kết thúc là trường bắt buộc',
    description: 'Tells the user that the restricted dates must have end date and it is required.',
  },
  restrictedStartDateInPast: {
    id: 'authoring.restrictedDates.startDate.inPast',
    defaultMessage: 'Ngày bắt đầu không thể sau ngày kết thúc',
    description: 'Tells the user that the restricted start date cannot be in past and cannot be after end date',
  },
  restrictedEndDateInPast: {
    id: 'authoring.restrictedDates.endDate.inPast',
    defaultMessage: 'Ngày kết thúc không thể trước ngày bắt đầu',
    description: 'Tells the user that the restricted end date cannot be in past and cannot be before start date',
  },
  restrictedStartTimeInPast: {
    id: 'authoring.restrictedDates.startTime.inPast',
    defaultMessage: 'Giờ bắt đầu không thể sau giờ kết thúc',
    description: 'Tells the user that the restricted start time cannot be in past and cannot be after end time',
  },
  restrictedEndTimeInPast: {
    id: 'authoring.restrictedDates.endTime.inPast',
    defaultMessage: 'Giờ kết thúc không thể trước giờ bắt đầu',
    description: 'Tells the user that the restricted end time cannot be in past and cannot be before start time',
  },
  restrictedStartTimeInValidFormat: {
    id: 'authoring.restrictedDates.startTime.inValidFormat',
    defaultMessage: 'Vui lòng nhập giờ bắt đầu hợp lệ',
    description: 'Tells the user that the restricted start time format is in valid',
  },
  restrictedEndTimeInValidFormat: {
    id: 'authoring.restrictedDates.endTime.inValidFormat',
    defaultMessage: 'Vui lòng nhập giờ kết thúc hợp lệ',
    description: 'Tells the user that the restricted end time format is in valid',
  },
  restrictedStartDateInValidFormat: {
    id: 'authoring.restrictedDates.startDate.inValidFormat',
    defaultMessage: 'Vui lòng nhập ngày bắt đầu hợp lệ',
    description: 'Tells the user that the restricted start date format is in valid',
  },
  restrictedEndDateInValidFormat: {
    id: 'authoring.restrictedDates.endDate.inValidFormat',
    defaultMessage: 'Vui lòng nhập ngày kết thúc hợp lệ',
    description: 'Tells the user that the restricted end date format is in valid',
  },
  discussionRestrictionLabel: {
    id: 'authoring.discussions.builtIn.discussionRestriction.label',
    defaultMessage: 'Hạn chế thảo luận',
  },
  discussionRestrictionHelp: {
    id: 'authoring.discussions.discussionRestriction.help',
    defaultMessage: 'Nếu được bật, người học sẽ không thể đăng bài trong các thảo luận.',
  },
  discussionRestrictionDatesHelp: {
    id: 'authoring.discussions.discussionRestrictionDates.help',
    defaultMessage: 'Nếu được thêm, người học sẽ không thể đăng bài trong các thảo luận giữa những ngày này.',
  },
  addRestrictedDatesButton: {
    id: 'authoring.discussions.addRestrictedDatesButton',
    defaultMessage: 'Thêm ngày hạn chế',
  },
  configureRestrictedDates: {
    id: 'authoring.discussions.builtIn.configureRestrictedDates.label',
    defaultMessage: 'Cấu hình khoảng thời gian hạn chế',
  },
  activeRestrictedDatesDeletionLabel: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.label',
    defaultMessage: 'Xóa các ngày hạn chế đang có hiệu lực?',
    description: 'Label for active restricted dates delete popup allowing a user to delete a restricted date range.',
  },
  activeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.help',
    defaultMessage: 'Các giới hạn thời gian này hiện đang có hiệu lực. Nếu bị xóa, người học sẽ có thể đăng bài thảo luận trong khoảng thời gian này. Bạn có chắc chắn muốn tiếp tục?',
    description: 'Help text for delete a active restricted dates from restricted dates section.',
  },
  completeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.completeRestrictedDatesDeletion.help',
    defaultMessage: 'Bạn có chắc chắn muốn xóa các ngày hạn chế này không?',
    description: 'Help text for delete a complete restricted dates from restricted dates section.',
  },
  restrictedDatesDeletionLabel: {
    id: 'authoring.discussions.restrictedDatesDeletion.label',
    defaultMessage: 'Xóa các ngày hạn chế?',
    description: 'Label for restricted dates delete popup allowing a user to delete a restricted date range.',
  },
  restrictedDatesDeletionHelp: {
    id: 'authoring.discussions.restrictedDatesDeletion.help',
    defaultMessage: 'Nếu bị xóa, người học sẽ có thể đăng bài thảo luận trong khoảng thời gian này.',
    description: 'Help text for delete a upcoming restricted dates from restricted dates section.',
  },
  discussionRestrictionOffLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOff.label',
    defaultMessage: 'Nếu được bật, người học sẽ có thể đăng bài trong các thảo luận',
  },
  discussionRestrictionOnLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOn.label',
    defaultMessage: 'Nếu được bật, người học sẽ không thể đăng bài trong các thảo luận',
  },
  discussionRestrictionScheduledLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionScheduled.label',
    defaultMessage: 'Nếu được thêm, người học sẽ không thể đăng bài trong các thảo luận giữa những ngày này.',
  },
  enableRestrictedDatesConfirmationLabel: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.label',
    defaultMessage: 'Bật các ngày hạn chế?',
  },
  enableRestrictedDatesConfirmationHelp: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.help',
    defaultMessage: 'Người học sẽ không thể đăng bài trong các thảo luận.',
  },
  deleteAltText: {
    id: 'authoring.topics.delete',
    defaultMessage: 'Xóa chủ đề',
  },
  expandAltText: {
    id: 'authoring.topics.expand',
    defaultMessage: 'Mở rộng',
  },
  collapseAltText: {
    id: 'authoring.topics.collapse',
    defaultMessage: 'Thu gọn',
  },
  startDateLabel: {
    id: 'authoring.restrictedDates.start.date',
    defaultMessage: 'Ngày bắt đầu',
    description: 'Label for start date field',
  },
  startTimeLabel: {
    id: 'authoring.restrictedDates.start.time',
    defaultMessage: 'Giờ bắt đầu (tùy chọn)',
    description: 'label for start time field',
  },
  endDateLabel: {
    id: 'authoring.restrictedDates.end.date',
    defaultMessage: 'Ngày kết thúc',
    description: 'label for end date field',
  },
  endTimeLabel: {
    id: 'authoring.restrictedDates.end.time',
    defaultMessage: 'Giờ kết thúc (tùy chọn)',
    description: 'label for end time field',
  },
});

export default messages;