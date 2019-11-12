dir = '/home/hughleeboy/doctoral/server/Dataset/'

tables = [
['_Course.txt', 'COURSE'],
['_Section.txt', 'SECTION'],
['_Instructor.txt', 'INSTRUCTOR'],
['_TT.txt', 'TT'],
['_Grants.txt', 'GRANTS'],
['_PhDStudent.txt', 'PHDSTUDENT'],
['_GTA.txt', 'GTA'],
['_GRA.txt', 'GRA'],
['_SelfSupport.txt', 'SELFSUPPORT'],
['_ScholarshipSupport.txt', 'SCHOLARSHIPSUPPORT'],
['_CoursesTaught.txt', 'COURSESTAUGHT'],
['_Milestone.txt', 'MILESTONE'],
['_MilestonesPassed.txt', 'MILESTONESPASSED'],
['_GrantAssociated.txt', 'GRANTSASSOCIATED'],
['_PhDCommittee.txt', 'PHDCOMMITTEE'],
]

to_write = ''
to_query = ''

for pair in tables:
    to_write += """LOAD DATA LOCAL INFILE '{}'
INTO TABLE {}
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

""".format(dir + pair[0], pair[1])
    to_query += """SELECT * FROM {};
""".format(pair[1])

outfile = open('generated', 'w')
print(to_write, file=outfile)
outfile.close()

outfile = open('queries', 'w')
print(to_query, file=outfile)
outfile.close()
