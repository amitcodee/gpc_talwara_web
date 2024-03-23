interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

interface EmploymentInfo {
  position: string;
  department: string;
  salary: number;
  hireDate: Date;
}

interface PersonalInfo {
  name: string;
  age: number;
  gender: string;
}

interface Staff extends ContactInfo, EmploymentInfo, PersonalInfo {
  id: number;
}

interface EducationInfo {
  degree: string;
  university: string;
  graduationYear: number;
}

export interface CertificationInfo {
  name: string;
  issuingAuthority: string;
  issueDate: Date;
}

export interface ExperienceInfo {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
}

export interface StaffExtended extends Staff {
  education: EducationInfo[];
  certifications: CertificationInfo[];
  experience: ExperienceInfo[];
}

export class StaffExtendedImpl implements StaffExtended {
   constructor(
    public id: number,
    public email: string,
    public phone: string,
    public address: string,
    public position: string,
    public department: string,
    public salary: number,
    public hireDate: Date,
    public name: string,
    public age: number,
    public gender: string,
    public education: EducationInfo[],
    public certifications: CertificationInfo[],
    public experience: ExperienceInfo[] ) {}
  }
