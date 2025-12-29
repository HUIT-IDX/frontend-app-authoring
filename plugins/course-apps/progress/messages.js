import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.progress.heading',
    defaultMessage: 'Cấu hình tiến độ',
  },
  enableProgressLabel: {
    id: 'course-authoring.pages-resources.progress.enable-progress.label',
    defaultMessage: 'Tiến độ',
  },
  enableProgressHelp: {
    id: 'course-authoring.pages-resources.progress.enable-progress.help',
    defaultMessage: `Khi học viên hoàn thành các bài tập có tính điểm, điểm số sẽ xuất hiện trong tab tiến độ. Tab tiến độ bao gồm một biểu đồ của tất cả các bài tập có tính điểm trong khóa học, kèm theo danh sách chi tiết các bài tập và điểm số bên dưới.`,
  },
  enableProgressLink: {
    id: 'course-authoring.pages-resources.progress.enable-progress.link',
    defaultMessage: 'Tìm hiểu thêm về tiến độ',
  },
  enableGraphLabel: {
    id: 'course-authoring.pages-resources.progress.enable-graph.label',
    defaultMessage: 'Bật biểu đồ tiến độ',
  },
  enableGraphHelp: {
    id: 'course-authoring.pages-resources.progress.enable-graph.help',
    defaultMessage: 'Nếu được bật, học viên có thể xem biểu đồ tiến độ của họ',
  },
});

export default messages;