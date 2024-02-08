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
  date: string,
  exam_location: string,
  time: string
}

export type SemesterResult = {
  semester: string,
  results: {
    mid1: {
      exam_type: string,
      total_marks: number,
      grades:
        {
          subject: string,
          subject_code: string,
          marks: number,
          is_absent: boolean,
          before_assesment: null | number,
          reassesment: null | number
        }[], 
    },
    mid2: {
      exam_type: string,
      total_marks: number,
      grades:
        {
          subject: string,
          subject_code: string,
          marks: number,
          is_absent: boolean,
          before_assesment: null | number,
          reassesment: null | number
        }[], 
    },
    final: {
      exam_type: string,
      total_marks: number,
      grades:
        {
          subject: string,
          subject_code: string,
          marks: number,
          is_absent: boolean,
          before_assesment: null | number,
          reassesment: null | number
        }[], 
    },

  }
}

export type Result = {
  academic_term: string,
  course: string,
  grading_scale: string, 
  maximum_score: number,
  total_score: number
}[]