import os
import argparse
import sys
import sqlite3

parser = argparse.ArgumentParser(description="시간표 도움말",)

parser.add_argument("-v", "--view", dest="view", action="store_true", required=False, help="시간표를 확인합니다, 기본 옵션.")
parser.add_argument("-e", "--edit", dest="edit", action="store_true", required=False, help="시간표를 편집합니다.")
parser.add_argument("-d", "--dele", dest="dele", action="store_true", required=False, help="시간표를 삭제합니다.")

args = parser.parse_args()

if args.view:
    con = sqlite3.connect("Timetable.sqlite3")
    cur = con.cursor()

    with con:
        pass
        # cur.execute()
if args.edit:
    print("edit")
if args.dele:
    print("dele")
# class ArgAction(argparse.Action):
    # def __init__(self)