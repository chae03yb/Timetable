import os
import argparse
import sys
import sqlite3
from datetime import datetime

parser = argparse.ArgumentParser(description="시간표 도움말",)

parser.add_argument("-v", "--view", dest="view", action="store_true", required=False, help="시간표를 확인합니다, 기본 옵션.")
parser.add_argument("-e", "--edit", dest="edit", action="store_true", required=False, help="시간표를 편집합니다.")
parser.add_argument("-d", "--dele", dest="dele", action="store_true", required=False, help="시간표를 삭제합니다.")

args = parser.parse_args()
con = sqlite3.connect("Timetable.sqlite3")
cur = con.cursor()

Day = ["Mon", "Tue", "Wed", "Thu", "Fri"]

if args.view:
    if datetime.today().weekday() > 4:
        print("주말입니다.")
    else:
        with con:
            print("\n".join(map(str, cur.execute(f"select * from {Day[datetime.today().weekday()]};")))\
                .replace("('", '').replace("',)", ''))

if args.edit:
    with con:
        for i in range(0, 5):
            for x in range(1, 8):
                Data = input(f"{Day[i]} - {x}교시의 과목을 입력해주세요.")
                cur.execute(f"insert into {Day[i]} values (?);", (Data,))
        con.commit()

if args.dele:
    check = input("정말로 시간표를 삭제하시겠습니까?\nY/N: ")
    if check == "Y":
        with con:
            for i in range(0, 5):
                cur.execute(f"drop table {Day[i]};")
            print("시간표를 삭제했습니다.")
            con.commit()
        os.remove("Timetable.sqlite3")
    else:
        print("취소되었습니다.")