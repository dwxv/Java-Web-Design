-- 1. List the names of the patients. The names should be in the form of "first_name last_name".

select first_name, last_name from patients;

-- 2. List the names and doses left of the vaccines. The results should be ordered by doses left in descending order.

select name, doses_left from vaccines order by doses_left DESC;

-- 3. Find the patients who have received the Pfizer/BioNTech vaccine. For each patient, the result should include patient's id and name.

select id, first_name, last_name from patients where vaccine_id = 1;

-- 4. List the names of the vaccines, and for each vaccine, the number of patients who have received that vaccine 
--    (or 0 if no patient has received that vaccine). 
--    The results should be ordered by the number of patients in descending order.

select vaccines.name, count(patients.id) as Num_of_patients
from vaccines
inner join patients
on vaccines.id = patients.vaccine_id
group by vaccines.name
order by Num_of_patients DESC;

-- 5. List the patients, and for each patient, the result should include the following:

   /* The patient's id
    The patient's name
    The name of the vaccine the patient received
    The doses required for the vaccine
    The dates when the patient received the vaccine */

select patients.id, patients.first_name, patients.last_name, vaccines.name as vaccine_name, vaccines.doses_required, patients.first_dose_date, patients.second_dose_date
from patients
inner join vaccines on patients.vaccine_id=vaccines.id;

-- 6. Find the patients whose second dose is overdue (*). 
--    For each patient, the result should include the patient's 
--    id and name, the name of the vaccine the patient received, and the date of the first dose received.

select if(DATEDIFF(CURRENT_DATE(), patients.first_dose_date) > vaccines.days_between_doses, 
(select patients.id, patients.first_name, patients.last_name, vaccines.name as vaccine_name, patients.first_dose_date
from patients, vaccines
where patients.vaccine_id=vaccines.id)
,"NO")
from patients, vaccines;