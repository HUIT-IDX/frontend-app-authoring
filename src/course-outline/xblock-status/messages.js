import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  unscheduledLabel: {
    id: 'course-authoring.course-outline.xblock-status.unscheduled.label',
    defaultMessage: 'Chưa lên lịch',
  },
  releasedLabel: {
    id: 'course-authoring.course-outline.xblock-status.released.label',
    defaultMessage: 'Đã phát hành: ',
  },
  scheduledLabel: {
    id: 'course-authoring.course-outline.xblock-status.scheduled.label',
    defaultMessage: 'Đã lên lịch: ',
  },
  onboardingExam: {
    id: 'course-authoring.course-outline.xblock-status.onboardingExam.value',
    defaultMessage: 'Bài kiểm tra làm quen',
  },
  practiceProctoredExam: {
    id: 'course-authoring.course-outline.xblock-status.practiceProctoredExam.value',
    defaultMessage: 'Bài kiểm tra giám thị thử nghiệm',
  },
  proctoredExam: {
    id: 'course-authoring.course-outline.xblock-status.proctoredExam.value',
    defaultMessage: 'Bài kiểm tra có giám thị',
  },
  timedExam: {
    id: 'course-authoring.course-outline.xblock-status.timedExam.value',
    defaultMessage: 'Bài kiểm tra giới hạn thời gian',
  },
  releaseStatusScreenReaderTitle: {
    id: 'course-authoring.course-outline.xblock-status.releaseStatusScreenReader.title',
    defaultMessage: 'Trạng thái ra mắt: ',
  },
  gradedAsScreenReaderLabel: {
    id: 'course-authoring.course-outline.xblock-status.gradedAsScreenReader.label',
    defaultMessage: 'Chấm điểm theo hệ: ',
  },
  ungradedText: {
    id: 'course-authoring.course-outline.xblock-status.ungraded.text',
    defaultMessage: 'Không tính điểm',
  },
  dueLabel: {
    id: 'course-authoring.course-outline.xblock-status.due.label',
    defaultMessage: 'Hạn chót:',
  },
  customDueDateLabel: {
    id: 'course-authoring.course-outline.xblock-status.custom-due-date.label',
    defaultMessage: 'Hạn chót tùy chỉnh: {relativeWeeksDue, plural, one {# tuần} other {# tuần}} kể từ khi đăng ký',
  },
  prerequisiteLabel: {
    id: 'course-authoring.course-outline.xblock-status.prerequisite.label',
    defaultMessage: 'Điều kiện tiên quyết: {prereqDisplayName}',
  },
  restrictedUnitAccess: {
    id: 'course-authoring.course-outline.xblock-status.restrictedUnitAccess.text',
    defaultMessage: 'Truy cập vào đơn vị này bị hạn chế đối với: {selectedGroupsLabel}',
  },
  restrictedUnitAccessToSomeContent: {
    id: 'course-authoring.course-outline.xblock-status.restrictedUnitAccessToSomeContent.text',
    defaultMessage: 'Quyền truy cập vào một số nội dung trong đơn vị này bị giới hạn cho các nhóm học viên cụ thể',
  },
  gradingPolicyMismatchText: {
    id: 'course-authoring.course-outline.xblock-status.gradingPolicyMismatch.text',
    defaultMessage: 'Chương này được cấu hình theo kiểu "{gradingType}", nhưng kiểu này không tồn tại trong chính sách chấm điểm hiện tại.',
  },
  hiddenAfterEndDate: {
    id: 'course-authoring.course-outline.xblock-status.hiddenAfterEndDate.text',
    defaultMessage: 'Chương này bị ẩn sau ngày kết thúc khóa học',
  },
  hiddenAfterDueDate: {
    id: 'course-authoring.course-outline.xblock-status.hiddenAfterDueDate.text',
    defaultMessage: 'Chương này bị ẩn sau ngày hạn chót',
  },
});

export default messages;
