import os
import sqlite3
from datetime import datetime

con = sqlite3.connect("Timetable.sqlite3")
cur = con.cursor()

Day = ["Mon", "Tue", "Wed", "Thu", "Fri"]

with con:
    try:
        for i in range(0, 5):
            cur.execute(f"create table {Day[i]} (str Subjects);")
        print("설정이 완료되었습니다.")
    except IndexError:
        pass
    finally:
        con.commit()