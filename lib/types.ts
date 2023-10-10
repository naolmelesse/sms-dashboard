export type TopStudent = {
    student_id: number
    name: string
    average: number
    class: string
    year: number
  }

export type ClassSession = {
  subject: string,
  time: string, 
  teacher: string,
  class_location: string,
}

export type Exam = {
  subject: string,
  subject_code: string,
  date: Date,
  exam_location: string,
  time: string
}