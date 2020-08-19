import os
import sqlite3

con = sqlite3.connect("Timetable.sqlite3")
cur = con.cursor()

with con:
    cur.execute("create table Mon (str Subjects);")
    cur.execute("create table Tue (str Subjects);")
    cur.execute("create table Wed (str Subjects);")
    cur.execute("create table Thu (str Subjects);")
    cur.execute("create table Fri (str Subjects);")
    con.commit()